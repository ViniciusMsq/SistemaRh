<?php

namespace App\Http\Controllers;

use App\Models\Linguagen;
use Illuminate\Http\Request;
use SebastianBergmann\Environment\Console;

class LinguagensController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return Linguagen::all();    

    }
    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {

        Linguagen::create($request->all());
        /*$linguagen = new Linguagen;

        $linguagen->nome = $request->nome;

        $linguagen->save();*/

    }
    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {   
        return Linguagen::findOrFail($id);
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
        $linguagen = Linguagen::findOrFail($id);
        $linguagen->update($request->all());
    }
    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        Linguagen::findOrFail($id)->delete();
        
    }
}
