package main;

import spark.utils.IOUtils;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.nio.file.DirectoryStream;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.function.Consumer;

import static spark.Spark.*;

public class ClientManager {
    public static final String PATH_TO_CLIENT_PROJECT = "../client";
    public static final String PATH_TO_DIST = new File(PATH_TO_CLIENT_PROJECT, "dist").getAbsolutePath();
    public static final String PATH_TO_BUNDLE_JS = new File(PATH_TO_DIST, "bundle/bundle.js").getAbsolutePath();
    public static final String PATH_TO_CSS = new File(PATH_TO_CLIENT_PROJECT, "css").getAbsolutePath();
    public static final String PATH_TO_BUNDLE_CSS = new File(PATH_TO_CSS, "bundle.css").getAbsolutePath();
    public static final String PATH_TO_RESOURCES = new File(PATH_TO_CLIENT_PROJECT, "resources").getAbsolutePath();
    public static final String STATIC_RESOURCE_PREFIX = "/static";

    private ClientManager() {

    }

    public static String readFile(String fileName) throws IOException {
        return IOUtils.toString(new FileInputStream(fileName));
    }


    public static void setUpStaticResources() {
        findAllFiles(Paths.get(PATH_TO_RESOURCES), (path) -> {
            System.out.println("found static resource: " + path.toAbsolutePath().toString());
            System.out.println("mapping it to: " + convertResourcePathToWebUrl(path));
            get(convertResourcePathToWebUrl(path), (req, res) -> IOUtils.toByteArray(new FileInputStream(path.toAbsolutePath().toString())));
        });
    }

    private static String convertResourcePathToWebUrl(Path path) {
        return STATIC_RESOURCE_PREFIX + path.toAbsolutePath().toString().substring(PATH_TO_RESOURCES.length());
    }

    private static void findAllFiles(Path root, Consumer<Path> fn) {
        try (DirectoryStream<Path> directoryStream = Files.newDirectoryStream(root)) {
            for (Path path : directoryStream) {
                if (Files.isDirectory(path)) {
                    findAllFiles(path, fn);
                } else {
                    fn.accept(path);
                }
            }
        } catch (IOException ex) {

        }
    }
}
