package main;

import main.Data.Message;

import java.util.Date;

/**
 * Created by Abhinand on 6/6/2017.
 */
public class MessageFactory {
    public static Message create(String message, String username, Date time) {
        return new Message().setMessage(message)
                            .setUsername(username)
                            .setTime(time);
    }
}
