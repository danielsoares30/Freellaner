// Ficheiro: br/com/freellaner/login/Controller/LoginController.java

package br.com.freellaner.login.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import br.com.freellaner.login.DAO.InterfaceLogin;
import br.com.freellaner.login.model.Login;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/login")
@CrossOrigin(origins = "http://localhost:5173") 
public class LoginController {

    @Autowired
    private InterfaceLogin dao;

    @GetMapping
    public List<Login> ListarCadastros() {
        return (List<Login>) dao.findAll();
    }

    // --- Endpoint para CADASTRO (POST /login) ---
    @PostMapping
    public ResponseEntity<?> criarUsuario(@RequestBody Login login) {
        try {
            // Verifica se o email já existe
            if (dao.findByEmail(login.getEmail()).isPresent()) {
                // Retorna um erro 400 (Bad Request) com uma mensagem clara
                return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Este email já está em uso.");
            }
            Login usuarioNovo = dao.save(login);
            return new ResponseEntity<>(usuarioNovo, HttpStatus.CREATED); // Sucesso (201 Created)
        } catch (Exception e) {
            // Se ocorrer qualquer outro erro (ex: problema na base de dados), retorna um erro 500
            // e envia a mensagem de erro para o frontend.
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Erro no servidor ao criar utilizador: " + e.getMessage());
        }
    }
    
    // --- Endpoint para LOGIN (POST /login/auth) ---
    @PostMapping("/auth")
    public ResponseEntity<?> autenticarUsuario(@RequestBody Login loginRequest) {
        try {
            Optional<Login> usuarioOptional = dao.findByEmail(loginRequest.getEmail());

            if (usuarioOptional.isPresent() && usuarioOptional.get().getSenha().equals(loginRequest.getSenha())) {
                return ResponseEntity.ok(usuarioOptional.get()); // Sucesso (200 OK)
            } else {
                // Retorna 401 (Não Autorizado) com uma mensagem clara
                return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Email ou senha inválidos.");
            }
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Erro no servidor durante a autenticação.");
        }
    }
}
