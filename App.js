import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  StatusBar,
} from "react-native";

const Apresentação = () => {
  return (
    <View style={styles.pagina}>
      <Image style={styles.tinyLogo} source={require("./assets/avatar.png")} />
      <Text style={styles.title}>
        Olá me chamo Ítalo Souto, atualmente estou no 3º periodo de Análise e
        Desenvolvimento de Sistemas na Faculdade SENAC. Cada dia mais venho me
        aperfeiçoando tanto como programador, quanto como pessoa. Sou uma pessoa
        qua gosta bastante de esportes, no geral, gosto bastante de viajar e de
        fazer trilhas.
      </Text>
      <StatusBar style="auto" />
    </View>
  );
};

const Experiências = () => {
  return (
    <View style={styles.pagina}>
      <Text style={styles.headerTitlle}>Experiências:</Text>
      <Text style={styles.title}>
        Residência Softex (2024.1 - Atualmente) - Softex - O que eu fazia:
        Atuava como desenvolvedor de front-end em um projeto de plataforma de
        rifas diárias. Minhas principais responsabilidades incluíam o
        desenvolvimento do front-end utilizando TypeScript e Node.js como
        linguagens de programação, além de empregar o React como framework para
        construir a interface da plataforma.
      </Text>
      <Text style={styles.title}>
        Residência do Porto Digital - RiseUp 2023.2 (2023) - A3data - O que eu
        fazia: Realizava o processo de Extração, Transformação e Carga (ETL) e e
        apresentava dashboards com base nesses dados obtidos.
      </Text>
      <Text style={styles.title}>
        Monitor do Porto Digital (2024.1 - 2024.2) - O que eu fazia: Sou
        responsável por auxiliar na gestão logística do laboratório de inovação,
        além de prestar suporte durante a realização de workshops realizados
        nesse espaço
      </Text>
      <Text style={styles.title}>
        Monitor do Porto Digital (2024.1 - 2024.2) - O que eu fazia: Sou
        responsável por auxiliar na gestão logística do laboratório de inovação,
        além de prestar suporte durante a realização de workshops realizados
        nesse espaço
      </Text>
    </View>
  );
};

const CursosEFormações = () => {
  return (
    <View style={styles.pagina}>
      <Text style={styles.headerTitlle}>Cursos e Formações:</Text>
      <Text style={styles.title}>
        Tecnólogo em Análise e Desenvolvimento de Sistemas (2023.1 - 2025.2) -
        Faculdade SENAC PE
      </Text>
      <Text style={styles.title}>
        Formação Acelerada em Programação (FAP) (Julho 2023 - Janeiro 2024) -
        Softex Formação em programação com ênfase em Front-end. Nesse curso além
        das aulas de lógica de programação, HTML, CSS, JavaScript, TypeScript,
        Node e React, também fiz vários projetos ultilizando essas linguagens.
      </Text>
      <Text style={styles.title}>
        Lógica de programação (Curso em Vídeo) (2021) Comecei a Desenvolver
        minha lógica de programação.
      </Text>
      <Text style={styles.title}>
        Excel Intermediário (Fundação Bradesco) (2022) Adquiri habilidades e
        conhecimentos mais avançados sobre o uso do Microsoft Excel
      </Text>
    </View>
  );
};

const Habilidades = () => {
  return (
    <View style={styles.pagina}>
      <Text style={styles.headerTitlle}>Habilidades:</Text>
      <Text style={styles.title}>
        Git | Github | Trabalho em Equipe | Comunicação | Resolução de Problemas
        | Python | JavaScript | MySql | TypeScript | React | HTML | CSS |
        Metodologias Ágeis | React native |
      </Text>
    </View>
  );
};

const App = () => {
  const [menuAberto, setMenuAberto] = useState(false);
  const [paginaAtual, setPaginaAtual] = useState("Apresentação");

  const toggleMenu = () => {
    setMenuAberto(!menuAberto);
  };

  const navegarPara = (pagina) => {
    setPaginaAtual(pagina);
    setMenuAberto(false);
  };

  const renderizarPagina = () => {
    switch (paginaAtual) {
      case "Apresentação":
        return <Apresentação />;
      case "Experiências":
        return <Experiências />;
      case "Cursos e Formações":
        return <CursosEFormações />;
      case "Habilidades":
        return <Habilidades />;
      default:
        return null;
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.titulo}>Meu App</Text>
        <TouchableOpacity onPress={toggleMenu} style={styles.menuIcon}>
          <Text>☰</Text>
        </TouchableOpacity>
      </View>

      {menuAberto && (
        <View style={styles.menu}>
          <TouchableOpacity
            style={styles.menuItem}
            onPress={() => navegarPara("Apresentação")}
          >
            <Text style={styles.menuItemText}>Apresentação</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.menuItem}
            onPress={() => navegarPara("Experiências")}
          >
            <Text style={styles.menuItemText}>Experiências</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.menuItem}
            onPress={() => navegarPara("Cursos e Formações")}
          >
            <Text style={styles.menuItemText}>Cursos e Formações</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.menuItem}
            onPress={() => navegarPara("Habilidades")}
          >
            <Text style={styles.menuItemText}>Habilidades</Text>
          </TouchableOpacity>
        </View>
      )}

      <View style={styles.content}>{renderizarPagina()}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 24,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  titulo: {
    fontSize: 20,
    fontWeight: "bold",
  },
  menuIcon: {
    padding: 10,
    fontSize: 20,
  },
  menu: {
    backgroundColor: "#f9f9f9",
    padding: 10,
  },
  menuItem: {
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  menuItemText: {
    fontSize: 16,
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  pagina: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  headerTitlle: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
  tinyLogo: {
    width: 100,
    height: 100,
    marginBottom: 10,
  },
  title: {
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center",
    paddingHorizontal: 30,
    marginTop: 30,
  },
  Text: {
    textAlign: "start",
    marginBottom: 10,
    marginTop: 10,
    paddingHorizontal: 80,
  },
});

export default App;
