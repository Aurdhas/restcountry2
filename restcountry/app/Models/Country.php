<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Country extends Model
{
    use HasFactory;
    
    protected $table = 'countries';

    protected $fillable = [
        'name',
        'population',
        'region',
        'capital',
        'flag',
        'languages',
        'currencies',
    ];

    protected $casts = [
        'languages' => 'array',
        'currencies' => 'array',
    ];
}
