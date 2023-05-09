using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace PocketForzaHorizonCommunity.Back.Database.Migrations
{
    /// <inheritdoc />
    public partial class TiresRename : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "TiersDescription",
                table: "TunesOptions",
                newName: "TiresDescription");

            migrationBuilder.RenameColumn(
                name: "RearTierWidth",
                table: "TunesOptions",
                newName: "RearTireWidth");

            migrationBuilder.RenameColumn(
                name: "FrontTierWidth",
                table: "TunesOptions",
                newName: "FrontTireWidth");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "TiresDescription",
                table: "TunesOptions",
                newName: "TiersDescription");

            migrationBuilder.RenameColumn(
                name: "RearTireWidth",
                table: "TunesOptions",
                newName: "RearTierWidth");

            migrationBuilder.RenameColumn(
                name: "FrontTireWidth",
                table: "TunesOptions",
                newName: "FrontTierWidth");
        }
    }
}
