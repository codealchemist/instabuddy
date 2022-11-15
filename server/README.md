# instabuddy

Instantly create your own instant buttons!

## Development

### Start the server with:

`npm run dev`

This will build the client and save the build to `dist` folder.

The server will load client files from `dist` by default.

Changes to server code will restart the server.

**TODO:** Automatically rebuild the client and reload the browser after client code changes.

### Create a channel

For example, open the app at:

http://localhost:3000/channel/test/create

Feel free to replace `test` with any channel name.

This URL will be used only once to create the channel.

After that you can use the normal channel URL:

http://localhost:3000/channel/test

