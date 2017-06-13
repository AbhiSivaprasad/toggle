package main.Data;

import java.util.Date;
import java.util.UUID;

/**
 * Created by Abhinand on 6/11/2017.
 */
public class Message {
    private UUID messageId;
    private String message;
    private String username;
    private Date time;

    public String getMessage() {
        return message;
    }

    public Message setMessage(String message) {
        this.message = message;
        return this;
    }

    public String getUsername() {
        return username;
    }

    public Message setUsername(String username) {
        this.username = username;
        return this;
    }

    public Date getTime() {
        return time;
    }

    public Message setTime(Date time) {
        this.time = time;
        return this;
    }
}
