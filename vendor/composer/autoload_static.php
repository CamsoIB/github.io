<?php

// autoload_static.php @generated by Composer

namespace Composer\Autoload;

class ComposerStaticInit28b0e17e007a28b15523a4bf487ff0d2
{
    public static $prefixLengthsPsr4 = array (
        'P' => 
        array (
            'PHPMailer\\PHPMailer\\' => 20,
        ),
    );

    public static $prefixDirsPsr4 = array (
        'PHPMailer\\PHPMailer\\' => 
        array (
            0 => __DIR__ . '/..' . '/phpmailer/phpmailer/src',
        ),
    );

    public static $classMap = array (
        'Composer\\InstalledVersions' => __DIR__ . '/..' . '/composer/InstalledVersions.php',
    );

    public static function getInitializer(ClassLoader $loader)
    {
        return \Closure::bind(function () use ($loader) {
            $loader->prefixLengthsPsr4 = ComposerStaticInit28b0e17e007a28b15523a4bf487ff0d2::$prefixLengthsPsr4;
            $loader->prefixDirsPsr4 = ComposerStaticInit28b0e17e007a28b15523a4bf487ff0d2::$prefixDirsPsr4;
            $loader->classMap = ComposerStaticInit28b0e17e007a28b15523a4bf487ff0d2::$classMap;

        }, null, ClassLoader::class);
    }
}