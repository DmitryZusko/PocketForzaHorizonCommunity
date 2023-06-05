using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace PocketForzaHorizonCommunity.Back.Database.Migrations
{
    /// <inheritdoc />
    public partial class PathToUrlChange : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "ImagePath",
                table: "GalleryImage",
                newName: "ImageUrl");

            migrationBuilder.RenameColumn(
                name: "ThumbnailPath",
                table: "DesignsOptions",
                newName: "ThumbnailUrl");

            migrationBuilder.RenameColumn(
                name: "ImagePath",
                table: "Cars",
                newName: "ImageUrl");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "ImageUrl",
                table: "GalleryImage",
                newName: "ImagePath");

            migrationBuilder.RenameColumn(
                name: "ThumbnailUrl",
                table: "DesignsOptions",
                newName: "ThumbnailPath");

            migrationBuilder.RenameColumn(
                name: "ImageUrl",
                table: "Cars",
                newName: "ImagePath");
        }
    }
}
