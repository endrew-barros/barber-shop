// index.js

const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function main() {
  // Criando um usuário
  const novoUsuario = await prisma.usuario.create({
    data: {
      name: 'João'
    }
  });
  console.log('Novo usuário criado:', novoUsuario);

  // Criando uma barbearia
  const novaBarbearia = await prisma.barbershop.create({
    data: {
      name: 'Barbearia do Zé',
      address: 'Rua das Flores, 123',
      imageUrl: 'https://example.com/barbershop_image.jpg'
    }
  });
  console.log('Nova barbearia criada:', novaBarbearia);

  // Criando um serviço
  const novoServico = await prisma.service.create({
    data: {
      name: 'Corte de cabelo',
      price: 50.00 // O preço é float e tem 2 casas decimais
    }
  });
  console.log('Novo serviço criado:', novoServico);
}

main()
  .catch(e => {
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
