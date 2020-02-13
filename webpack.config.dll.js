/*
 * Copyright © LOGILAB S.A. (Paris, FRANCE) 2016-2019
 * Contact http://www.logilab.fr -- mailto:contact@logilab.fr
 *
 * This software is governed by the CeCILL-C license under French law and
 * abiding by the rules of distribution of free software. You can use,
 * modify and/ or redistribute the software under the terms of the CeCILL-C
 * license as circulated by CEA, CNRS and INRIA at the following URL
 * "http://www.cecill.info".
 *
 * As a counterpart to the access to the source code and rights to copy,
 * modify and redistribute granted by the license, users are provided only
 * with a limited warranty and the software's author, the holder of the
 * economic rights, and the successive licensors have only limited liability.
 *
 * In this respect, the user's attention is drawn to the risks associated
 * with loading, using, modifying and/or developing or reproducing the
 * software by the user in light of its specific status of free software,
 * that may mean that it is complicated to manipulate, and that also
 * therefore means that it is reserved for developers and experienced
 * professionals having in-depth computer knowledge. Users are therefore
 * encouraged to load and test the software's suitability as regards their
 * requirements in conditions enabling the security of their systemsand/or
 * data to be ensured and, more generally, to use and operate it in the
 * same conditions as regards security.
 *
 * The fact that you are presently reading this means that you have had
 * knowledge of the CeCILL-C license and that you accept its terms.
 */

const path = require("path");
const webpack = require('webpack');


const config = module.exports = {
    entry: {
        vendor: ['react', 'react-router', 'react-dom',
                 'redux', 'react-redux', 'redux-logger', 'redux-thunk',
                 'immutable',
                 'react-jsonschema-form',
                 'react-tinymce', 'react-widgets', 'react-bootstrap-table',
                 'moment',
                 'lodash',
                 'lodash-es',
                 'whatwg-fetch',
                 '@babel/polyfill'],
    },
    output: {
        filename: "bundle-[name].js",
        path: path.join(__dirname, 'cubicweb_frarchives_edition', 'data'),
        library: '[name]_[hash]',
    },
    plugins: [
        new webpack.DllPlugin({
            path: path.join(__dirname, "[name]-manifest.json"),
            name: "[name]_[hash]",
        }),
    ],
};


if (process.env.NODE_ENV === 'production') {
    config.plugins.push(
        new webpack.DefinePlugin({
            "process.env": {
                NODE_ENV: JSON.stringify('production'),
            },
        })
    );
}