from src.Book import Book


class Subject:
    id = 0
    name = ''
    song = []
    def __init__(self, id):
        self.id = id

    def add_song(self, song: Book):
        self.song.insert(book)
