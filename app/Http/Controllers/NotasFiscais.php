<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Unirest;
use Spatie\ArrayToXml\ArrayToXml;
use DOMDocument;

class NotasFiscais extends Controller
{
    public function __construct()
    {
        $this->urlGet = env('BASE_URL')."/notasfiscais/json/";
        $this->urlGetId = env('BASE_URL')."/notafiscal";
        $this->urlPost = env('BASE_URL')."/notafiscal/json/";
        $this->apikey = env('BLING_KEY');
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
        $data = $request->pedido[0];
        $dataArray = ArrayToXml::convert($data,['rootElementName' => 'pedido',], true, 'UTF-8');

        $doc = new DOMDocument();
        $doc->loadXML($dataArray);
        $xml = $doc->saveXML();

        //dd($xml);

        $headers = array('Accept' => 'application/json');
        $body = array('apikey' => $this->apikey,
                        'xml' => rawurlencode($xml)
                    );

        $data = Unirest\Request::post($this->urlPost, $headers, $body);
        dd($data);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($num, $serie)
    {
        $body = array("apikey" => $this->apikey);
        $show = Unirest\Request::get($this->urlGetId."/$num/$serie/json", null, $body);

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
