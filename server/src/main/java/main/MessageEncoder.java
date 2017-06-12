package main;

import main.Data.Message;

import javax.json.*;

import java.text.SimpleDateFormat;

/**
 * Created by Abhinand on 5/28/2017.
 */
public class MessageEncoder {

    public static String encode(Message message) {
        return Json.createObjectBuilder()
                .add("message", message.getMessage())
                .add("username", message.getUsername())
                .add("time", new SimpleDateFormat("HH:mm")
                        .format(message.getTime()))
                .build().toString();
    }
}
