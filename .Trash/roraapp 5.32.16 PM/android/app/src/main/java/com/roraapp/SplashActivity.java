package com.roraapp;

import android.content.Context;
import android.content.Intent;
import android.content.SharedPreferences;
import android.os.Bundle;
import android.os.Handler;
import android.support.v7.app.AppCompatActivity;

/**
 * Created by ViBrAtIoN on 10-12-2017.
 */

public class SplashActivity extends AppCompatActivity {
    Handler handler;
    Runnable runnable;

    @Override
    public void onCreate(Bundle savedInstanceState){
    super.onCreate(savedInstanceState);


        handler=new Handler();

        runnable=new Runnable() {
            @Override
            public void run() {

                Intent intent=new Intent(SplashActivity.this ,MainActivity.class);
                startActivity(intent);
                finishAffinity();
            }
        };

        handler.postDelayed(runnable,2000);
    }

}
