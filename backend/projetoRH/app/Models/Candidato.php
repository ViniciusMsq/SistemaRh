<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Candidato extends Model
{
    public $timestamps = false;
    use HasFactory;

    protected $fillable = [
        'nome', 
        'data_nascimento',
        'sexo',
        'login',
        'senha'
    ];
    
}
