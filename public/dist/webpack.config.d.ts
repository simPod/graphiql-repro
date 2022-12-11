import webpack from 'webpack';
import 'webpack-dev-server';
interface Argv {
    mode: string;
    hot?: true;
}
declare const mainConfig: (env: object, argv: Argv) => webpack.Configuration;
export default mainConfig;
