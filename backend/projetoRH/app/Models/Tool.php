<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Tool extends Model
{
    public $timestamps = false;
    protected $table = 'tools';
    use HasFactory;

    protected $fillable = [
        'id_linguagem',
        'id_vaga'
    ];

    
    
}
