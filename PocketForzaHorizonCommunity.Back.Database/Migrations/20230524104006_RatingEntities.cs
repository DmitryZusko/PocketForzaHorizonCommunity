using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace PocketForzaHorizonCommunity.Back.Database.Migrations
{
    /// <inheritdoc />
    public partial class RatingEntities : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Rating",
                table: "Tunes");

            migrationBuilder.DropColumn(
                name: "Rating",
                table: "Designs");

            migrationBuilder.CreateTable(
                name: "DesignsRating",
                columns: table => new
                {
                    UserId = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    DesignId = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    Rating = table.Column<double>(type: "float", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_DesignsRating", x => new { x.UserId, x.DesignId });
                    table.ForeignKey(
                        name: "FK_DesignsRating_AspNetUsers_UserId",
                        column: x => x.UserId,
                        principalTable: "AspNetUsers",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_DesignsRating_Designs_DesignId",
                        column: x => x.DesignId,
                        principalTable: "Designs",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "TunesRating",
                columns: table => new
                {
                    UserId = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    TuneId = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    Rating = table.Column<double>(type: "float", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_TunesRating", x => new { x.UserId, x.TuneId });
                    table.ForeignKey(
                        name: "FK_TunesRating_AspNetUsers_UserId",
                        column: x => x.UserId,
                        principalTable: "AspNetUsers",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_TunesRating_Tunes_TuneId",
                        column: x => x.TuneId,
                        principalTable: "Tunes",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateIndex(
                name: "IX_DesignsRating_DesignId",
                table: "DesignsRating",
                column: "DesignId");

            migrationBuilder.CreateIndex(
                name: "IX_TunesRating_TuneId",
                table: "TunesRating",
                column: "TuneId");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "DesignsRating");

            migrationBuilder.DropTable(
                name: "TunesRating");

            migrationBuilder.AddColumn<double>(
                name: "Rating",
                table: "Tunes",
                type: "float",
                nullable: false,
                defaultValue: 0.0);

            migrationBuilder.AddColumn<double>(
                name: "Rating",
                table: "Designs",
                type: "float",
                nullable: false,
                defaultValue: 0.0);
        }
    }
}
