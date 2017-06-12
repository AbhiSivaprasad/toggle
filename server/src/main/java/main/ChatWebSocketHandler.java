package main;

import main.Data.Message;
import org.eclipse.jetty.websocket.api.Session;
import org.eclipse.jetty.websocket.api.annotations.*;

import java.io.IOException;
import java.util.Collections;
import java.util.HashSet;
import java.util.Set;

/**
 * Created by Abhinand on 5/27/2017.
 */

@WebSocket
public class ChatWebSocketHandler {
    static Set<Session> members = Collections.synchronizedSet(new HashSet<Session>());

    @OnWebSocketConnect
    public void onConnect(Session user) throws Exception {
        members.add(user);

        System.out.println("connected");
    }

    @OnWebSocketClose
    public void onClose(Session user, int statusCode, String reason) {
        members.remove(user);
    }

    @OnWebSocketMessage
    public void onMessage(Session user, String strMessage) throws IOException {
        System.out.println("received message: " + strMessage);

        Message message = MessageDecoder.decode(strMessage);

        for(Session member : members) {
            if(!user.equals(member)) {
                member.getRemote()
                      .sendString(MessageEncoder.encode(message));
            }
        }
    }
}
