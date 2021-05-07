<?php

namespace App\Http\Controllers;

use App\Models\Tool;
use Illuminate\Http\Request;
use SebastianBergmann\Environment\Console;
use Illuminate\Support\Facades\DB;

class ToolsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return DB::table('vagas')
        ->join('tools', 'vagas.id', '=', 'tools.id_vaga')
        ->join('linguagens', 'linguagens.id', '=', 'tools.id_linguagem')
        ->select('vagas.id', 'vagas.descricao', 'vagas.empresa', 'linguagens.nome')
        ->get();      

    }
    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {

        Tool::create($request->all());
        /*$Tool = new Tool;

        $Tools->nome = $request->nome;

        $Tools->save();*/
    }
    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id_vaga)
    {   
        return DB::table('vagas')
        ->join('tools', 'vagas.id', '=', 'tools.id_vaga')
        ->join('linguagens', 'linguagens.id', '=', 'tools.id_linguagem')
        ->select('vagas.id', 'vagas.descricao', 'vagas.empresa', 'linguagens.nome')
        ->where('vagas.id', '=', $id_vaga)
        ->orderBy('vagas.id', 'asc')
        ->get(); 
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
    public function destroy($id_vaga)
    {
        Tool::findOrFail($id_vaga)->delete();
    }
}
