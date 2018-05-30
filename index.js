const mix = require('laravel-mix');

class Download {
    dependencies() {
        this.requiresReload = `
            download has been installed. Please run "npm run dev" again.
        `;

        return ['download'];
    }

    register(config) {
        if (!config.urls || config.urls.length <= 0) {
            throw new Error(
                'You need to provide at least 1 valid url in the urls options.'
            );
        }

        this.config = Object.assign({
            enabled: mix.inProduction(),
            urls: [],
            dest: '',
        }, config);
    }

    boot() {

        if (this.config.enabled) {
            const download = require('download');

            this.config.urls.forEach((file) => {

                if (this.config.dest) {

                    download(file.url, this.config.dest);

                } else {

                    download(file.url, file.dest);

                }

            });

        }

    }

}

mix.extend('download', new Download());