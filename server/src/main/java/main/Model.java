package main;

import java.util.UUID;

/**
 * Created by Abhinand on 6/11/2017.
 */
public interface Model {
    UUID createMessage();
    UUID createReply();
    String createUser();
    String createClass();
}
