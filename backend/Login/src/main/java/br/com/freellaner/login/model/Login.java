package br.com.freellaner.login.model;



import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "login")
public class Login {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @jakarta.persistence.Column(name = "id")
    private Integer id;

    @jakarta.persistence.Column(name = "nome_completo", length = 100, nullable = true)
    private String nome;

    @jakarta.persistence.Column(name = "ddata_nascimento", nullable = true)
    private String nascimento;

    @jakarta.persistence.Column(name = "cpf", length = 11, unique = true, nullable = true)
    private String cpf;

    @jakarta.persistence.Column(name = "email", unique = true, nullable = true)
    private String email;

    @jakarta.persistence.Column(name = "senha", nullable = true)
    private String senha;

    public Integer getId() {
        return id;
    }
    public void setId(Integer id) {
        this.id = id;
    }
    public String getNome() {
        return nome;
    }
    public void setNome(String nome) {
        this.nome = nome;
    }
    public String getNascimento() {
        return nascimento;
    }
    public void setNascimento(String nascimento) {
        this.nascimento = nascimento;
    }
    public String getCpf() {
        return cpf;
    }
    public void setCpf(String cpf) {
        this.cpf = cpf;
    }
    public String getEmail() {
        return email;
    }
    public void setEmail(String email) {
        this.email = email;
    }
    public String getSenha() {
        return senha;
    }
    public void setSenha(String senha) {
        this.senha = senha;
    }
}
