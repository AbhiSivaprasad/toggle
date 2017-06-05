package main;

import spark.ModelAndView;

import java.time.Instant;
import java.util.HashMap;
import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;

import static spark.Spark.*;

import spark.template.velocity.VelocityTemplateEngine;

import org.eclipse.jetty.websocket.api.Session;


public class Program {

    //map shared between sessions & threads so must be thread-safe
    static Map<Session, String> userUsernameMap = new ConcurrentHashMap<>();
    static int nextUserNumber = 1;

    public static void main(String[] args) {
        System.out.println("test");

        port(8000);


        webSocket("/chat", ChatWebSocketHandler.class);
        init();

        ClientManager.setUpStaticResources();

        get("/", (req, res) -> {
                    Map<String, Object> model = new HashMap<>();
                    model.put("time", Instant.now().toString());

                    // The wm files are located under the resources directory
                    return new ModelAndView(model, "hello.vm");
                },
                new VelocityTemplateEngine());

        get("/bundle.js", (req, res) -> {
            return ClientManager.readFile(ClientManager.PATH_TO_BUNDLE_JS);
        });

        get("/bundle.css", "text/css", (req, res) -> {
            res.type("text/css");

            return ClientManager.readFile(ClientManager.PATH_TO_BUNDLE_CSS);
        });
    }

    //user message will be sent to all other active users
    public static void broadcastMessage(String sender, String message) {
        System.out.println("flag");
        userUsernameMap.keySet().stream().filter(Session::isOpen).forEach(session -> {
            try {
                System.out.println("flag2");
                session.getRemote().sendString(message);
            } catch (Exception e) {
                e.printStackTrace();
            }
        });
    }
}
