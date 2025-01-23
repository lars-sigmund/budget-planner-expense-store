try {
    const branchName = process.argv[2];

    let appendix;

    switch(true) {
        case (branchName.endsWith("main")):
            appendix = "RELEASE";
            break;
        case (branchName.endsWith("release")):
            appendix = "RC";
            break;
        case (branchName.includes("release/")):
            appendix = "RC-" + branchName.replace("/", "_");
            break;
        case (branchName.endsWith("dev")):
            appendix = "SNAPSHOT";
            break;
        default:
            appendix = "SNAPSHOT-" + branchName.replace("/", "_");
            break;
    }

    console.log(appendix);
} catch (error) {
    console.log(error);
}
