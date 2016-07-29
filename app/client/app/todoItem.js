  var TodoItem = (function () {
        
        function Item(id, title, description) {
            this.id = id;
            this.title = title;
            this.description = description;

            if (Item.Row == undefined && Item.Column == undefined) {
                Item.Row = 0;
                Item.Column = 0;
            }
            else
            {
                if (Item.Column > 4) {
                    Item.Row = Item.Row + 1;
                    Item.Column = 0;
                }
                else {
                    Item.Column = Item.Column + 1;
                }
            }

            this.row = Item.Row;
            this.column = Item.Column;
        };

        return Item;
})();
