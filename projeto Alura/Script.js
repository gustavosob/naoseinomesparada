// Definições dos objetos de linguagem
const dados = [
    {
        titulo: "JAVA",
        descricao: "Java é uma linguagem de programação orientada a objetos, desenvolvida pela Sun Microsystems em 1995. É amplamente usada no desenvolvimento de aplicativos móveis (Android), aplicações web e sistemas empresariais.",
        desempenho: "Embora não seja tão rápido quanto o código nativo, Java oferece um bom desempenho graças à otimização da JVM.",
        olaMundo: `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}
`
    },
    {
        titulo: "JavaScript",
        descricao: "JavaScript é uma linguagem de programação leve, interpretada e orientada a objetos, amplamente utilizada para desenvolvimento web. Foi criada por Brendan Eich em 1995.",
        desempenho: "JavaScript é executado no navegador e seu desempenho pode variar dependendo do motor JavaScript do navegador.",
        olaMundo: `console.log("Hello, World!");
`
    },
    {
        titulo: "Python",
        descricao: "Python é uma linguagem de programação de alto nível, criada por Guido van Rossum e lançada em 1991. É conhecida por sua sintaxe clara e legibilidade.",
        desempenho: "Python não é tão rápido quanto linguagens compiladas, mas é eficiente para desenvolvimento rápido e prototipagem.",
        olaMundo: `print("Hello, World!")
`
    },
    {
        titulo: "C",
        descricao: "C é uma linguagem de programação de propósito geral, desenvolvida por Dennis Ritchie em 1972. É amplamente utilizada para desenvolvimento de sistemas operacionais e software de baixo nível.",
        desempenho: "C oferece alto desempenho e controle sobre recursos de hardware, sendo ideal para aplicações que exigem eficiência.",
        olaMundo: `#include &lt;stdio.h&gt;
int main() {
    printf("Hello, World!");
    return 0;
}
`
    },
    {
        titulo: "C++",
        descricao: "C++ é uma extensão da linguagem C, desenvolvida por Bjarne Stroustrup em 1983. Suporta programação orientada a objetos e é usada em sistemas operacionais, jogos e aplicações de alto desempenho.",
        desempenho: "C++ oferece alto desempenho e controle sobre recursos de hardware, similar ao C, mas com suporte adicional para programação orientada a objetos.",
        olaMundo: `#include &lt;iostream&gt;
int main() {
    std::cout &lt;&lt; "Hello, World!";
    return 0;
}
`
    },
    {
        titulo: "Assembly",
        descricao: "Assembly é uma linguagem de baixo nível que se comunica diretamente com o hardware do computador. Cada instrução em Assembly corresponde a uma instrução de máquina específica.",
        desempenho: "Assembly oferece o máximo desempenho possível, pois permite controle direto sobre o hardware.",
        olaMundo: `section .data
    hello db 'Hello, World!',0

section .text
    global _start
_start:
    ; write our string to stdout
    mov eax, 4
    mov ebx, 1
    mov ecx, hello
    mov edx, 13
    int 0x80

    ; exit
    mov eax, 1
    xor ebx, ebx
    int 0x80
`
    },
    {
        titulo: "TypeScript",
        descricao: "TypeScript é uma linguagem de programação desenvolvida pela Microsoft que é um superconjunto de JavaScript, adicionando tipagem estática opcional. Foi lançada em 2012.",
        desempenho: "TypeScript é compilado para JavaScript, então seu desempenho é similar ao de JavaScript.",
        olaMundo: `console.log("Hello, World!");
`
    },
    {
        titulo: "R",
        descricao: "R é uma linguagem de programação e ambiente de software livre para computação estatística e gráficos. Foi criada por Ross Ihaka e Robert Gentleman em 1993.",
        desempenho: "R é eficiente para análise de dados e visualização, mas pode ser mais lento em operações de grande escala comparado a outras linguagens.",
        olaMundo: `print("Hello, World!")
`
    },
    {
        titulo: "PHP",
        descricao: "PHP é uma linguagem de script de propósito geral, especialmente adequada para desenvolvimento web. Foi criada por Rasmus Lerdorf em 1994.",
        desempenho: "PHP é eficiente para desenvolvimento web, mas pode não ser tão rápido quanto linguagens compiladas para tarefas intensivas.",
        olaMundo: `&lt;?php
echo "Hello, World!";
?&gt;
`
    },
    {
        titulo: "SQL",
        descricao: "SQL (Structured Query Language) é uma linguagem padrão para gerenciamento de bancos de dados relacionais. Foi desenvolvida pela IBM nos anos 1970.",
        desempenho: "SQL é otimizada para consultas e manipulação de dados em bancos de dados relacionais.",
        olaMundo: `SELECT 'Hello, World!';
(não exatamente um "Hello World", mas uma consulta simples)`
    },
    {
        titulo: "Go",
        descricao: "Go, também conhecida como Golang, é uma linguagem de programação desenvolvida pelo Google em 2007. É conhecida por sua simplicidade e eficiência.",
        desempenho: "Go oferece alto desempenho e é eficiente para desenvolvimento de sistemas concorrentes.",
        olaMundo: `package main
import "fmt"
func main() {
    fmt.Println("Hello, World!")
}
`
    },
    {
        titulo: "HTML",
        descricao: "HTML (HyperText Markup Language) é a linguagem padrão para criação de páginas web. Foi desenvolvida por Tim Berners-Lee em 1991.",
        desempenho: "HTML não é uma linguagem de programação, mas uma linguagem de marcação usada para estruturar conteúdo na web.",
        olaMundo: `&lt;h1&gt; Hello, World! &lt;/h1&gt;
pode usar (h1) ou (h2) ou (h3) ou (p) fica a seu criterio`
    },
    {
        titulo: "CSS",
        descricao: "CSS (Cascading Style Sheets) é uma linguagem usada para descrever a apresentação de um documento escrito em HTML ou XML. Foi desenvolvida por Håkon Wium Lie e Bert Bos em 1996.",
        desempenho: "CSS é usada para estilizar páginas web e não afeta diretamente o desempenho de execução do código.",
        olaMundo: `body::before {
    content: "Hello, World!";
    display: block;
    font-size: 24px;
    color: blue;
}
`
    },
    {
        titulo: "Rust",
        descricao: "Rust é uma linguagem de programação de sistemas focada em segurança e desempenho. Foi desenvolvida pela Mozilla Research e lançada em 2010.",
        desempenho: "Rust oferece alto desempenho e segurança de memória, sendo ideal para desenvolvimento de sistemas e aplicações de alto desempenho.",
        olaMundo: `fn main() {
    println!("Hello, World!");
}
`
    },
    {
        titulo: "Perl",
        descricao: "Perl é uma linguagem de programação de propósito geral, desenvolvida por Larry Wall em 1987. É conhecida por sua capacidade de processamento de texto.",
        desempenho: "Perl é eficiente para manipulação de texto e scripts, mas pode não ser tão rápido quanto linguagens compiladas para tarefas intensivas.",
        olaMundo: `print "Hello, World!\n";
`
    },
    {
        titulo: "Ruby",
        descricao: "Ruby é uma linguagem de programação dinâmica e de propósito geral, desenvolvida por Yukihiro Matsumoto em 1995. É conhecida por sua simplicidade e produtividade.",
        desempenho: "Ruby é eficiente para desenvolvimento rápido, mas pode não ser tão rápido quanto linguagens compiladas.",
        olaMundo: `puts "Hello, World!"
`
    },
    {
        titulo: "Swift",
        descricao: "Swift é uma linguagem de programação desenvolvida pela Apple em 2014 para desenvolvimento de aplicativos iOS e macOS. É conhecida por sua segurança e desempenho.",
        desempenho: "Swift oferece alto desempenho e segurança, sendo ideal para desenvolvimento de aplicativos Apple.",
        olaMundo: `print("Hello, World!")
`
    },
    {
        titulo: "Kotlin",
        descricao: "Kotlin é uma linguagem de programação desenvolvida pela JetBrains em 2011. É totalmente interoperável com Java e é usada principalmente para desenvolvimento Android.",
        desempenho: "Kotlin oferece desempenho similar ao de Java, com algumas melhorias em termos de segurança e concisão de código.>",
        olaMundo: `fun main() {
    println("Hello, World!")
}
`
    }
];
