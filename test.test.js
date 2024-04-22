const readline = require('readline');

// Mocking readline.createInterface method
jest.mock('readline', () => ({
    createInterface: jest.fn().mockReturnValue({
        question: jest.fn(),
        close: jest.fn()
    })
}));

describe('Test readline interface', () => {
    let rl;

    beforeEach(() => {
        rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });
    });

    afterEach(() => {
        jest.clearAllMocks();
    });

    it('should create readline interface', () => {
        expect(readline.createInterface).toHaveBeenCalledWith({
            input: process.stdin,
            output: process.stdout
        });
    });

    it('should call question method', () => {
        rl.question('Enter your name: ', () => {});
        expect(rl.question).toHaveBeenCalledWith('Enter your name: ', expect.any(Function));
    });

    it('should call close method', () => {
        rl.close();
        expect(rl.close).toHaveBeenCalled();
    });
});const readline = require('readline');

// Mocking readline.createInterface
jest.mock('readline', () => ({
    createInterface: jest.fn().mockReturnValue({
        question: jest.fn(),
        close: jest.fn()
    })
}));

describe('Test readline interface', () => {
    let rl;

    beforeEach(() => {
        rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });
    });

    afterEach(() => {
        jest.clearAllMocks();
    });

    it('should create readline interface', () => {
        expect(readline.createInterface).toHaveBeenCalledWith({
            input: process.stdin,
            output: process.stdout
        });
    });

    it('should call question method', () => {
        rl.question('Enter your name: ', () => {});
        expect(rl.question).toHaveBeenCalledWith('Enter your name: ', expect.any(Function));
    });

    it('should call close method', () => {
        rl.close();
        expect(rl.close).toHaveBeenCalled();
    });
});