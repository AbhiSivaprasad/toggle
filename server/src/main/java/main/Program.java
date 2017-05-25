package main;

import spark.ModelAndView;

import java.time.Instant;
import java.util.HashMap;
import java.util.Map;

import static spark.Spark.*;

import spark.template.velocity.VelocityTemplateEngine;

public class Program {
    public static void main(String[] args) {
        System.out.println("test");

        port(8000);

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
}
