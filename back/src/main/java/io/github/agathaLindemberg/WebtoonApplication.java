package io.github.agathaLindemberg;

import io.github.agathaLindemberg.model.entity.Webtoon;
import io.github.agathaLindemberg.rest.WebtoonController;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;

@SpringBootApplication
@ComponentScan(basePackageClasses={WebtoonController.class, Webtoon.class})
public class WebtoonApplication {

    public static void main(String[] args) {
        SpringApplication.run(WebtoonApplication.class, args);
    }
}
