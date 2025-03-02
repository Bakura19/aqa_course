const fs = require('fs-extra');
const path = require('path');

(async () => {
    try {
        // 1. Создать папку "folder1"
        const folder1 = path.join(__dirname, 'folder1');
        await fs.ensureDir(folder1);
        console.log('Папка folder1 создана');

        // 2. Создать текстовый файл в созданной папке
        const file1 = path.join(folder1, 'file.txt');
        await fs.writeFile(file1, 'Привет, мир!', 'utf8');
        console.log('Файл file.txt создан');

        // 3. Создать вторую папку "folder2"/
        const folder2 = path.join(__dirname, 'folder2');
        await fs.ensureDir(folder2);
        console.log('Папка folder2 создана');

        // 4. Переместить файл из первой папки во вторую
        const movedFile = path.join(folder2, 'file.txt');
        await fs.move(file1, movedFile);
        console.log('Файл перемещён в folder2');

        // 5. Создать третью папку "folder3"
        const folder3 = path.join(__dirname, 'folder3');
        await fs.ensureDir(folder3);
        console.log('Папка folder3 создана');

        // 6. Скопировать файл из второй в третью папку
        const copiedFile = path.join(folder3, 'file.txt');
        await fs.copy(movedFile, copiedFile);
        console.log('Файл скопирован в folder3');

        // 7. Удалить файлы
        await fs.remove(movedFile);
        await fs.remove(copiedFile);
        console.log('Файлы удалены');

        // 8. Удалить все папки
        await fs.remove(folder1);
        await fs.remove(folder2);
        await fs.remove(folder3);
        console.log('Все папки удалены');

    } catch (error) {
        console.error('Ошибка:', error);
    }
})();