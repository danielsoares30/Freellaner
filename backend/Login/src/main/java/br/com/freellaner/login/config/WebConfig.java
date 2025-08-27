// Ficheiro: WebConfig.java (no seu projeto Backend)
package br.com.freellaner.login.config; // O seu pacote pode ser diferente

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class WebConfig implements WebMvcConfigurer {

    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/**") // Aplica a configuração a TODOS os endpoints da sua API
            .allowedOrigins("http://localhost:5173") // Permite pedidos vindos do seu frontend React
            .allowedMethods("GET", "POST", "PUT", "DELETE", "OPTIONS") // Métodos HTTP permitidos
            .allowedHeaders("*") // Permite todos os cabeçalhos
            .allowCredentials(true); // Permite o envio de credenciais (cookies, etc.)
    }
}
