import mongoose from 'mongoose';

class DbConfig {
  async openConn() {
    try {
      await mongoose.connect(process.env.MONGODB_URI!);

      console.log(
        '\x1b[41m\x1b[37m',
        'CONECTADO COM SUCESSO NO BANCO DE DADOS',
        '\x1b[0m'
      );
    } catch (error) {
      console.log(
        '\x1b[41m\x1b[37m',
        'ERRO AO SE CONECTAR COM O BANCO DE DADOS',
        error,
        '\x1b[0m'
      );
    }
  }
}

export default new DbConfig();
