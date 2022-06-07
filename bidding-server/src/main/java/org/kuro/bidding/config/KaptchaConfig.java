package org.kuro.bidding.config;

import com.google.code.kaptcha.impl.DefaultKaptcha;
import com.google.code.kaptcha.util.Config;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.util.Properties;

import static com.google.code.kaptcha.Constants.*;

@Configuration
public class KaptchaConfig {

    @Bean
    public DefaultKaptcha getKaptchaBean() {
        DefaultKaptcha defaultKaptcha = new DefaultKaptcha();

        Properties properties = new Properties();

        // 是否设置边框 默认为true  可以自己设置 yes  no
        properties.setProperty(KAPTCHA_BORDER, "no");
        // 边框颜色  默认为 black
        properties.setProperty(KAPTCHA_BORDER_COLOR, "105,179,90");

        // 图片高度  默认为50
        properties.setProperty(KAPTCHA_IMAGE_HEIGHT, "40");
        // 图片宽度  默认为200
        properties.setProperty(KAPTCHA_IMAGE_WIDTH, "105");


        // 文本字符大小 默认为 40
        properties.setProperty(KAPTCHA_TEXTPRODUCER_FONT_SIZE, "35");
        // 文本字符颜色 默认为 black
        properties.setProperty(KAPTCHA_TEXTPRODUCER_FONT_COLOR, "150,99,238");
        // 验证码文本字符间距 默认为2
        properties.setProperty(KAPTCHA_TEXTPRODUCER_CHAR_SPACE, "4");
        // 验证码文本字符长度 默认为5
        properties.setProperty(KAPTCHA_TEXTPRODUCER_CHAR_LENGTH, "4");
        // 验证码文本字体样式 默认为new Font("Arial", 1, fontSize), new Font("Courier", 1, fontSize)
        properties.setProperty(KAPTCHA_TEXTPRODUCER_FONT_NAMES, "Arial,Courier");
        // 验证码的取值范围
        properties.setProperty(KAPTCHA_TEXTPRODUCER_CHAR_STRING, "0123456789zxcvbnmasdfghjklqwertyuiopZXCVBNMASDFGHJKLQWERTYUIOP");
        // 验证码噪点颜色 默认为Color.BLACK
        properties.setProperty(KAPTCHA_NOISE_COLOR, "white");

        // KAPTCHA_SESSION_KEY
        properties.setProperty(KAPTCHA_SESSION_CONFIG_KEY, "loginImageCode");
        // 验证码文本生成器  可以自定义文本生成器（com.xxx.KaptchaTextCreator）  可以使用默认
        // properties.setProperty(KAPTCHA_TEXTPRODUCER_IMPL, "com.xxx.KaptchaTextCreator");

        // 干扰实现类
        properties.setProperty(KAPTCHA_NOISE_IMPL, "com.google.code.kaptcha.impl.NoNoise");
        // 图片样式 水纹com.google.code.kaptcha.impl.WaterRipple 鱼眼com.google.code.kaptcha.impl.FishEyeGimpy 阴影com.google.code.kaptcha.impl.ShadowGimpy
        properties.setProperty(KAPTCHA_OBSCURIFICATOR_IMPL, "com.google.code.kaptcha.impl.WaterRipple");

        Config config = new Config(properties);
        defaultKaptcha.setConfig(config);
        return defaultKaptcha;
    }
}
