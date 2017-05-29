package main;

import org.eclipse.jetty.websocket.api.*;
import org.eclipse.jetty.websocket.api.annotations.*;

/**
 * Created by Abhinand on 5/27/2017.
 */

@WebSocket
public class ChatWebSocketHandler {
    private String sender, msg;

    @OnWebSocketConnect
    public void onConnect(Session user) throws Exception {
        String username = "User" + Program.nextUserNumber++;
        Program.userUsernameMap.put(user, username);
        //Program.broadcastMessage(sender = "Server", msg = (username + " joined the chat"));

        System.out.println("socket connected");

        for(Session s : Program.userUsernameMap.keySet()) {
            System.out.println(Program.userUsernameMap.get(s));
        }
    }

    @OnWebSocketClose
    public void onClose(Session user, int statusCode, String reason) {
        String username = Program.userUsernameMap.get(user);
        Program.userUsernameMap.remove(user);
        Program.broadcastMessage(sender = "Server", msg = (username + " left the chat"));

        System.out.println("socket closed");
    }

    @OnWebSocketMessage
    public void onMessage(Session user, String message) {
        Program.broadcastMessage(sender = Program.userUsernameMap.get(user), msg = message);

        System.out.println(message);

        System.out.println("socket sending...");
    }

}
