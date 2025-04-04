import livro from "../models/Livro.js";

class LivroController {
    static async listarLivros(req, res) {
        const listaLivros = await livro.find({});
        res.status(200).json(listaLivros);
    };

    static async listaLivros(req, res) {

        try {
            const listaLivros = await livro.find({});
            res.status(200).json(listaLivros);
        } catch (erro) {
            res.status(500).json({
                message: ` ${erro.massage} - 
                Falha na requisição`});
        }
    };
    static async listaLivroPorId(req, res) {
        try {
            const id = req.params.id;
            const livroEncontrado = await livro.findById(id);
            res.status(200).json(livroEncontrado);
        }
        catch (erro) {
            res.status(500).json({ message: ` ${erro.massage} - Falha na reqisição do livro` });
        }
    };


    static async cadastrarLivro(req, res) {
        try {
            const novoLivro = await livro.create(req.body);
            res.status(201).json({ massage: "Criado com sucesso", livro: novoLivro });

        } catch (erro) {
            res.status(500).json({ message: ` ${erro.massage} - Falha ao cadastrar livro` });
        }
    }
    static async atualizarLivro(req, res) {
        try {
            const id = req.params.id;
            await livro.findByIdAndUpdate(id, req.body);
            res.status(200).json({massage: "Livro atualizado com sucesso"});
        }
        catch (erro) {
            res.status(500).json({ message: ` ${erro.massage} - Falha na atualização do livro` });
        }
    };

    static async excluirLivro(req, res) {
        try {
            const id = req.params.id;
            await livro.findByIdAndDelete(id);
            res.status(200).json({massage: "Livro excluído com sucesso"});
        }
        catch (erro) {
            res.status(500).json({ message: ` ${erro.massage} - Falha na exclusão do livro` });
        }
    };


}

export default LivroController;