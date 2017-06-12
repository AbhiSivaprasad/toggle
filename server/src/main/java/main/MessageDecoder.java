package main;


import main.Data.Message;

import javax.json.Json;
import javax.json.JsonObject;
import java.io.StringReader;
import java.util.Date;

/**
 * Created by Abhinand on 5/28/2017.
 */
public class MessageDecoder  {
    public static Message decode(String strMessage) {
        JsonObject jsonMessage = Json.createReader(new StringReader(strMessage)).readObject();

        return MessageFactory.create(jsonMessage.getString("message"),
                jsonMessage.getString("username"), new Date());
    }

    //security flaw. Must check for Json
    public boolean willDecode(String s) {return true; }

}
