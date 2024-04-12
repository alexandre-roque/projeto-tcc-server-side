"use server";

import { db } from "@/db";
import { products, product } from "@/db/schema/products";
import { eq } from "drizzle-orm";

export async function insertProducts() {
	const p = [
		{
			name: "Sapatos Esportivos AeroFit",
			description:
				"Os sapatos esportivos AeroFit combinam estilo e conforto. Com solado flexível e amortecimento de última geração, eles são ideais para corridas e treinos intensos.",
			imageUrl:
				"https://cdn.pixabay.com/photo/2015/05/31/10/54/shoes-791044_1280.jpg",
			price: 79.99,
		},
		{
			name: "Smartwatch TechGlow",
			description:
				"O smartwatch TechGlow oferece monitoramento de saúde, notificações inteligentes e uma bateria de longa duração. Perfeito para quem busca estilo e funcionalidade.",
			imageUrl:
				"https://cdn.pixabay.com/photo/2020/02/10/09/18/calendar-4835848_1280.jpg",
			price: 149.99,
		},
		{
			name: "Fones de Ouvido SoundWave",
			description:
				"Os fones de ouvido SoundWave proporcionam som cristalino e cancelamento de ruído ativo. Leves e confortáveis, são ideais para audiófilos e amantes da música.",
			imageUrl:
				"https://cdn.pixabay.com/photo/2017/01/18/17/14/girl-1990347_960_720.jpg",
			price: 129.99,
		},
		{
			name: "Mochila Urban Trek",
			description:
				"A mochila Urban Trek é resistente à água, possui compartimentos organizados e alças acolchoadas. Perfeita para a vida urbana e aventuras ao ar livre.",
			imageUrl:
				"https://cdn.pixabay.com/photo/2016/11/29/09/30/backpack-1868720_1280.jpg",
			price: 59.99,
		},
		{
			name: "Óculos de Sol SunRay",
			description:
				"Os óculos de sol SunRay oferecem proteção UV total e estilo elegante. Perfeitos para dias ensolarados na praia ou na cidade.",
			imageUrl:
				"https://cdn.pixabay.com/photo/2016/03/27/19/33/sunset-1283872_1280.jpg",
			price: 89.99,
		},
		{
			name: "Relógio de Pulso TimeMaster",
			description:
				"O relógio de pulso TimeMaster combina design elegante com funcionalidades avançadas. Possui cronômetro, resistência à água e uma pulseira de couro genuíno.",
			imageUrl:
				"https://cdn.pixabay.com/photo/2023/04/26/17/59/wrist-watch-7953062_1280.jpg",
			price: 199.99,
		},
		{
			name: "Bolsa Tote City Chic",
			description:
				"A bolsa tote City Chic é espaçosa e versátil. Ideal para o trabalho ou para um dia de compras na cidade. Possui compartimentos internos e alças confortáveis.",
			imageUrl:
				"https://cdn.pixabay.com/photo/2016/06/25/12/50/handbag-1478814_1280.jpg",
			price: 69.99,
		},
		{
			name: "Tênis Casual UrbanStride",
			description:
				"Os tênis casuais UrbanStride são perfeitos para o dia a dia. Leves, flexíveis e com um design moderno, eles combinam com qualquer estilo.",
			imageUrl:
				"https://cdn.pixabay.com/photo/2015/08/10/21/33/retro-883207_1280.jpg",
			price: 49.99,
		},
		{
			name: "Câmera Digital PhotoPro",
			description:
				"A câmera digital PhotoPro captura imagens nítidas e vídeos em alta resolução. Possui modos automáticos e manuais para fotógrafos de todos os níveis.",
			imageUrl:
				"https://cdn.pixabay.com/photo/2014/11/22/00/51/camera-541213_1280.jpg",
			price: 399.99,
		},
		{
			name: "Colar Moonlight",
			description:
				"O colar Moonlight é delicado e elegante. Com um pingente em forma de lua, é perfeito para ocasiões especiais ou para presentear alguém querido.",
			imageUrl:
				"https://cdn.pixabay.com/photo/2022/08/22/12/11/beauty-7403551_1280.jpg",
			price: 59.99,
		},
		{
			name: "Bicicleta EcoRide",
			description:
				"A bicicleta EcoRide é leve, dobrável e perfeita para deslocamentos urbanos. Com pneus resistentes e um design elegante, ela é uma escolha sustentável.",
			imageUrl:
				"https://cdn.pixabay.com/photo/2013/03/19/18/23/mountain-biking-95032_1280.jpg",
			price: 299.99,
		},
		{
			name: "Camiseta Casual UrbanBlend",
			description:
				"A camiseta casual UrbanBlend é feita de algodão macio e possui um corte moderno. Ideal para o dia a dia ou para um passeio descontraído.",
			imageUrl:
				"https://cdn.pixabay.com/photo/2015/08/10/00/43/boy-882334_1280.jpg",
			price: 24.99,
		},
		{
			name: "Notebook TechWave",
			description:
				"O notebook TechWave oferece desempenho rápido, tela de alta resolução e uma bateria de longa duração. Perfeito para trabalho ou entretenimento.",
			imageUrl:
				"https://cdn.pixabay.com/photo/2020/10/21/18/07/laptop-5673901_1280.jpg",
			price: 799.99,
		},
		{
			name: "Brincos Starlight",
			description:
				"Os brincos Starlight são delicados e brilhantes. Com pedras preciosas incrustadas, eles são ideais para ocasiões especiais.",
			imageUrl:
				"https://cdn.pixabay.com/photo/2020/09/11/17/48/woman-5563792_1280.jpg",
			price: 129.99,
		},
		{
			name: "Jaqueta Corta-Vento WindGuard",
			description:
				"A jaqueta corta-vento WindGuard é resistente à água e possui forro térmico. Ideal para atividades ao ar livre em dias frios.",
			imageUrl: "https://i.imgur.com/DGGsAGh.png",
			price: 89.99,
		},
	];

	for (const pr of p) {
		await db.insert(products).values(pr);
	}
}
