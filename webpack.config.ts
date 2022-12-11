import path from 'path';
import webpack from 'webpack';

// import { ArrayElement } from '@flop/client/Typings/d';

const postcssConfig = {
  postcssOptions: { plugins: ['postcss-preset-env'] },
  sourceMap: true,
};

interface Argv {
  mode: string,
  hot?: true
}

interface EntryObject {
  [index: string]: string | string[];
}

const mainConfig: (env: object, argv: Argv) => webpack.Configuration = (env, argv) => {
  const isDevelopment = argv.mode === 'development';

  const entries: EntryObject = {
    App: './src/index.tsx',
  };

  const styleLoaders = [
    'style-loader',
    { loader: 'css-loader', options: { import: false, importLoaders: 2, sourceMap: true, url: true } },
    { loader: 'postcss-loader', options: postcssConfig },
    { loader: 'sass-loader', options: { sourceMap: true } },
  ];

  const moduleStyleLoaders = [
    { loader: 'style-loader' },
    {
      loader: 'css-loader',
      options: {
        modules: {
          exportLocalsConvention: 'camelCase',
          localIdentName: isDevelopment ? '[path][name]__[local]' : '[hash:base64]',
        },
      },
    },
    { loader: 'postcss-loader', options: postcssConfig },
    { loader: 'sass-loader' },
  ];

  const externalStylesLoaders = [
    { loader: 'css-loader' },
    { loader: 'postcss-loader', options: postcssConfig },
    { loader: 'sass-loader' },
  ];

  const plugins: any[] = [];

  const config: webpack.Configuration = {
    entry: entries,
    module: {
      rules: [
        {
          exclude: /node_modules/,
          test: /\.tsx?$/,
          use: [
            { loader: 'ts-loader' },
          ],
        },
        {
          include: /index\.scss$/,
          test: /\.(scss|css)$/,
          use: styleLoaders,
        },
        {
          exclude: [/index\.scss$/, /node_modules/],
          test: /\.scss$/,
          use: moduleStyleLoaders,
        },
        {
          include: [/node_modules/],
          test: /\.(s)?css$/,
          use: externalStylesLoaders,
        }
      ],
    },
    output: {
      clean: true,
      filename: `[name].js`,
      path: path.join(__dirname, '../public/dist'),
      publicPath: `/dist/`,
    },
    plugins,
    resolve: {
      extensions: ['.tsx', '.ts', '.mjs', '.js', '.scss', '.css', '.graphql'],
    },
  };

  return config;
};

// eslint-disable-next-line import/no-default-export
export default mainConfig;
