import Knex from "knex";

export async function seed(knex: Knex) {
  await knex("items").insert([
    {
      title: "Lampadas",
      image: "lampadas.svg",
    },
    {
      title: "Pilhas e Baterias",
      image: "baterias.svg",
    },
    {
      title: "Papés e papelões",
      image: "papeis-papelao.svg",
    },
    {
      title: "Resíduos Eletricos",
      image: "eletronicos.svg",
    },
    {
      title: "Resíduos Orgânicos",
      image: "organicos.svg",
    },
    {
      title: "Óleo de cozinha",
      image: "oleo.svg",
    },
  ]);
}
