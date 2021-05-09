<?php

namespace App\Http\Controllers;

use App\Models\Inscription;
use Illuminate\Http\Request;
use SebastianBergmann\Environment\Console;
use Illuminate\Support\Facades\DB;
class InscriptionsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return DB::table('candidatos')
        ->join('inscriptions', 'candidatos.id', '=', 'inscriptions.id_candidato')
        ->join('vagas', 'vagas.id', '=', 'inscriptions.id_vaga')
        ->select('candidatos.id', 'inscriptions.id_vaga',   'candidatos.nome','candidatos.data_nascimento','candidatos.sexo', 'vagas.descricao', 'vagas.empresa')
        ->orderBy('id', 'asc')
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

        Inscription::create($request->all());
        /*$Inscription = new Inscription;

        $Inscription->nome = $request->nome;

        $Inscription->save();*/

    }
    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id_candidato)
    {   
        return DB::table('candidatos')
        ->join('inscriptions', 'candidatos.id', '=', 'inscriptions.id_candidato')
        ->join('vagas', 'vagas.id', '=', 'inscriptions.id_vaga')
        ->select('candidatos.id', 'inscriptions.id_vaga', 'candidatos.nome','candidatos.data_nascimento','candidatos.sexo', 'vagas.descricao', 'vagas.empresa')
        ->where('candidatos.id','=',$id_candidato)
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
    public function destroy($id_candidato, $id_vaga)
    {
        DB::table('inscriptions')
        ->where('id_candidato','=',$id_candidato)
        ->where('id_vaga', '=', $id_vaga)
        ->delete();
    }
}
