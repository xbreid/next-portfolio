import Document, { Head, Main, NextScript } from 'next/document';
import flush from 'styled-jsx/server';
import React from 'react';
import PropTypes from 'prop-types';

class MyDocument extends Document {

  render () {
    const { pageContext } = this.props;

    return (
      <html>
      <Head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
        <meta httpEquiv="ScreenOrientation" content="autoRotate:disabled"/>
        <meta content='width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0, shrink-to-fit=no' name='viewport' />
        <meta name="apple-mobile-web-app-capable" content="yes"/>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js"/>
        <script type="text/javascript" src="/static/js/common.js"/>
        <link rel='stylesheet' href='/static/css/nav.css' />
        <link rel='stylesheet' href='/static/css/default.css' />
        <link rel='stylesheet' href='/static/css/button.css' />
        <link rel='stylesheet' href='/static/css/parallax.css' />
        <link rel='stylesheet' href='/static/css/animate.css' />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Montserrat:300,400,500,600,700"/>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,500,600,700"/>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500"/>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Raleway:400,500,600,700,800,900"/>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Oswald"/>
        <link ref="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"/>
        <link rel="stylesheet" href="https://unpkg.com/fullpage.js@3.0.1/dist/fullpage.min.css"/>
      </Head>
      <body >
        <Main />
        <NextScript />
      </body>
      </html>
    )
  }
}

MyDocument.getInitialProps = ctx => {
  let pageContext;
  const page = ctx.renderPage(Component => {
    const WrappedComponent = props => {
      pageContext = props.pageContext;
      return <Component {...props} />;
    };

    WrappedComponent.propTypes = {
      pageContext: PropTypes.object.isRequired,
    };

    return WrappedComponent;
  });

  return {
    ...page,
    pageContext,
    // Styles fragment is rendered after the app and page rendering finish.
    styles: (
      <React.Fragment>
        <style
          id="jss-server-side"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: pageContext.sheetsRegistry.toString() }}
        />
        {flush() || null}
      </React.Fragment>
    ),
  };
};

export default MyDocument;
