<?php

use Illuminate\Database\Seeder;
use App\Produto;

class ProdutosTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $ch = curl_init();
        curl_setopt($ch,CURLOPT_URL,"https://bling.com.br/Api/v2/produtos/json/?apikey=".env('BLING_KEY'));
        curl_setopt($ch,CURLOPT_RETURNTRANSFER, 1);

        $output=curl_exec($ch);

        $produtos = json_decode($output);

        foreach($produtos->retorno->produtos as $prod){
            Produto::create([
                'codigo' => $prod->produto->codigo,
                'descricao' => $prod->produto->descricao,
                'tipo' => $prod->produto->tipo,
                'situacao' => $prod->produto->situacao,
                'unidade' => $prod->produto->unidade,
                'preco' => $prod->produto->preco,
                'precoCusto' => $prod->produto->precoCusto,
                'descricaoCurta' => $prod->produto->descricaoCurta,
                'descricaoComplementar' => $prod->produto->descricaoComplementar,
                'dataInclusao' => $prod->produto->dataInclusao,
                'dataAlteracao' => $prod->produto->dataAlteracao,
                'imageThumbnail' => $prod->produto->imageThumbnail,
                'urlVideo' => $prod->produto->urlVideo,
                'nomeFornecedor' => $prod->produto->nomeFornecedor,
                'codigoFabricante' => $prod->produto->codigoFabricante,
                'marca' => $prod->produto->marca,
                'class_fiscal' => $prod->produto->class_fiscal,
                'cest' => $prod->produto->cest,
                'origem' => $prod->produto->origem,
                'idGrupoProduto' => $prod->produto->idGrupoProduto,
                'linkExterno' => $prod->produto->linkExterno,
                'observacoes' => $prod->produto->observacoes,
                'grupoProduto' => $prod->produto->grupoProduto,
                'garantia' => $prod->produto->garantia,
                'descricaoFornecedor' => $prod->produto->descricaoFornecedor,
                'idFabricante' => $prod->produto->idFabricante,
                'pesoLiq' => $prod->produto->pesoLiq,
                'pesoBruto' => $prod->produto->pesoBruto,
                'estoqueMinimo' => $prod->produto->estoqueMinimo,
                'estoqueMaximo' => $prod->produto->estoqueMaximo,
                'gtin' => $prod->produto->gtin,
                'gtinEmbalagem' => $prod->produto->gtinEmbalagem,
                'larguraProduto' => $prod->produto->larguraProduto,
                'alturaProduto' => $prod->produto->alturaProduto,
                'profundidadeProduto' => $prod->produto->profundidadeProduto,
                'unidadeMedida' => $prod->produto->unidadeMedida,
                'itensPorCaixa' => $prod->produto->itensPorCaixa,
                'volumes' => $prod->produto->volumes,
                'localizacao' => $prod->produto->localizacao,
                'crossdocking' => $prod->produto->crossdocking,
                'condicao' => $prod->produto->condicao,
                'freteGratis' => $prod->produto->freteGratis,
                'producao' => $prod->produto->producao,
                'dataValidade' => $prod->produto->dataValidade,
                'spedTipoItem' => $prod->produto->spedTipoItem
            ]);

        }

    }
}
