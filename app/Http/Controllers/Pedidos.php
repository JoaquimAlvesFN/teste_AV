<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Unirest;
use Spatie\ArrayToXml\ArrayToXml;
use DOMDocument;

class Pedidos extends Controller
{
    public function __construct()
    {
        $this->urlGet = "https://bling.com.br/Api/v2/pedidos/json/";
        $this->urlPost = "https://bling.com.br/Api/v2/pedido/json/";
        $this->urlGetId = "https://bling.com.br/Api/v2/pedido/";
        $this->apikey = "d5b1b13ec2ea2c66d4bbe8e1a02ac45fe16014d9f7fc85dcd178ea50d707185b93ef47f7";
    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $body = array("apikey" => $this->apikey);
        $index = Unirest\Request::get($this->urlGet, null, $body);

        return response()->json($index);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        echo $request;
        /*$data = $request->pedido[0];
        $dataArray = ArrayToXml::convert($data,['rootElementName' => 'pedido',], true, 'UTF-8');

        $doc = new DOMDocument();
        $doc->loadXML($dataArray);
        $xml = $doc->saveXML();

        $headers = array('Accept' => 'application/json');
        $body = array('apikey' => $this->apikey,
                        'xml' => rawurlencode($xml)
                    );
        $data = Unirest\Request::post($this->urlPost, $headers, $body);
        dd($data);*/
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $body = array("apikey" => $this->apikey);
        $show = Unirest\Request::get($this->urlGetId."$id/json/", null, $body);

        return response()->json($show);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
