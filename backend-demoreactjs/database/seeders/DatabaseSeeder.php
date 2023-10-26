<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // \App\Models\User::factory(10)->create();

        // \App\Models\User::factory()->create([
        //     'name' => 'Test User',
        //     'email' => 'test@example.com',
        // ]);

        DB::table('users')->insert([
            [
                'id' => 1,
                'name' => 'duogbachdev',
                'email' => 'duogbachdev@example.com',
                'password' => bcrypt("123456"),
            ],
            [
                'id' => 2,
                'name' => 'Nguyen Van An',
                'email' => 'duogbachdev2@example.com',
                'password' => bcrypt("123456"),
            ],
            [
                'id' => 3,
                'name' => 'Nguyen Van Binh',
                'email' => 'duogbachdev3@example.com',
                'password' => bcrypt("123456"),
            ],
            [
                'id' => 4,
                'name' => 'Do DUong Bach',
                'email' => 'duogbachdev4@example.com',
                'password' => bcrypt("123456"),
            ],
            [
                'id' => 5,
                'name' => 'Hoang Van Nam',
                'email' => 'duogbachdev5@example.com',
                'password' => bcrypt("123456"),
            ]
        ]);
    }
}
