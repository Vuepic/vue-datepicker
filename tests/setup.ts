// Just in case some test fail, to exit test, otherwise it will report as passed
process.on('unhandledRejection', (err) => {
    fail(err);
});
