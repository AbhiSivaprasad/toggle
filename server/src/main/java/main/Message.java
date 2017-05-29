package main;

import java.util.Date;

/**
 * Created by Abhinand on 5/28/2017.
 */
public class Message {
    private String message;
    private String username;
    private Date time;

    public Message(String message, String username, Date time) {
        this.message = message;
        this.username = username;
        this.time = time;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public Date getTime() {
        return time;
    }

    public void setTime(Date time) {
        this.time = time;
    }
}
