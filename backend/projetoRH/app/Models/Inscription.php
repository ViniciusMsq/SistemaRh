<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Inscription extends Model
{
    public $timestamps = false;
    protected $table = 'inscriptions';
    use HasFactory;

    protected $fillable = [
        'id_candidato',
        'id_vaga'
    ];

    
    
}
