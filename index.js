class Hero {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    atacar() {
        let ataque;
        switch (this.tipo.toLowerCase()) {
            case 'mago':
                ataque = 'magia';
                break;
            case 'guerreiro':
                ataque = 'espada';
                break;
            case 'monge':
                ataque = 'artes marciais';
                break;
            case 'ninja':
                ataque = 'katana e ninjutsu';
                break;
            default:
                ataque = 'um ataque desconhecido';
        }
        console.log(`O ${this.tipo} atacou usando ${ataque}`);
    }
}

// Exemplo de uso:
const mago = new Hero('Merlin', 100, 'mago');
mago.atacar();

const guerreiro = new Hero('Arthur', 35, 'guerreiro');
guerreiro.atacar();

const monge = new Hero('Lee', 40, 'monge');
monge.atacar();

const ninja = new Hero('Hanzo', 28, 'ninja');
ninja.atacar();