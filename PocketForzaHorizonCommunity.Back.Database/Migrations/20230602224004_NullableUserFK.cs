using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace PocketForzaHorizonCommunity.Back.Database.Migrations
{
    /// <inheritdoc />
    public partial class NullableUserFK : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Designs_AspNetUsers_UserId",
                table: "Designs");

            migrationBuilder.DropForeignKey(
                name: "FK_DesignsRating_AspNetUsers_UserId",
                table: "DesignsRating");

            migrationBuilder.DropForeignKey(
                name: "FK_DesignsRating_Designs_EntityId",
                table: "DesignsRating");

            migrationBuilder.DropForeignKey(
                name: "FK_Tunes_AspNetUsers_UserId",
                table: "Tunes");

            migrationBuilder.DropForeignKey(
                name: "FK_TunesRating_AspNetUsers_UserId",
                table: "TunesRating");

            migrationBuilder.DropForeignKey(
                name: "FK_TunesRating_Tunes_EntityId",
                table: "TunesRating");

            migrationBuilder.AlterColumn<Guid>(
                name: "UserId",
                table: "Tunes",
                type: "uniqueidentifier",
                nullable: true,
                oldClrType: typeof(Guid),
                oldType: "uniqueidentifier");

            migrationBuilder.AlterColumn<Guid>(
                name: "UserId",
                table: "Designs",
                type: "uniqueidentifier",
                nullable: true,
                oldClrType: typeof(Guid),
                oldType: "uniqueidentifier");

            migrationBuilder.AddForeignKey(
                name: "FK_Designs_AspNetUsers_UserId",
                table: "Designs",
                column: "UserId",
                principalTable: "AspNetUsers",
                principalColumn: "Id",
                onDelete: ReferentialAction.SetNull);

            migrationBuilder.AddForeignKey(
                name: "FK_DesignsRating_AspNetUsers_UserId",
                table: "DesignsRating",
                column: "UserId",
                principalTable: "AspNetUsers",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_DesignsRating_Designs_EntityId",
                table: "DesignsRating",
                column: "EntityId",
                principalTable: "Designs",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Tunes_AspNetUsers_UserId",
                table: "Tunes",
                column: "UserId",
                principalTable: "AspNetUsers",
                principalColumn: "Id",
                onDelete: ReferentialAction.SetNull);

            migrationBuilder.AddForeignKey(
                name: "FK_TunesRating_AspNetUsers_UserId",
                table: "TunesRating",
                column: "UserId",
                principalTable: "AspNetUsers",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_TunesRating_Tunes_EntityId",
                table: "TunesRating",
                column: "EntityId",
                principalTable: "Tunes",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Designs_AspNetUsers_UserId",
                table: "Designs");

            migrationBuilder.DropForeignKey(
                name: "FK_DesignsRating_AspNetUsers_UserId",
                table: "DesignsRating");

            migrationBuilder.DropForeignKey(
                name: "FK_DesignsRating_Designs_EntityId",
                table: "DesignsRating");

            migrationBuilder.DropForeignKey(
                name: "FK_Tunes_AspNetUsers_UserId",
                table: "Tunes");

            migrationBuilder.DropForeignKey(
                name: "FK_TunesRating_AspNetUsers_UserId",
                table: "TunesRating");

            migrationBuilder.DropForeignKey(
                name: "FK_TunesRating_Tunes_EntityId",
                table: "TunesRating");

            migrationBuilder.AlterColumn<Guid>(
                name: "UserId",
                table: "Tunes",
                type: "uniqueidentifier",
                nullable: false,
                defaultValue: new Guid("00000000-0000-0000-0000-000000000000"),
                oldClrType: typeof(Guid),
                oldType: "uniqueidentifier",
                oldNullable: true);

            migrationBuilder.AlterColumn<Guid>(
                name: "UserId",
                table: "Designs",
                type: "uniqueidentifier",
                nullable: false,
                defaultValue: new Guid("00000000-0000-0000-0000-000000000000"),
                oldClrType: typeof(Guid),
                oldType: "uniqueidentifier",
                oldNullable: true);

            migrationBuilder.AddForeignKey(
                name: "FK_Designs_AspNetUsers_UserId",
                table: "Designs",
                column: "UserId",
                principalTable: "AspNetUsers",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_DesignsRating_AspNetUsers_UserId",
                table: "DesignsRating",
                column: "UserId",
                principalTable: "AspNetUsers",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_DesignsRating_Designs_EntityId",
                table: "DesignsRating",
                column: "EntityId",
                principalTable: "Designs",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_Tunes_AspNetUsers_UserId",
                table: "Tunes",
                column: "UserId",
                principalTable: "AspNetUsers",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_TunesRating_AspNetUsers_UserId",
                table: "TunesRating",
                column: "UserId",
                principalTable: "AspNetUsers",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_TunesRating_Tunes_EntityId",
                table: "TunesRating",
                column: "EntityId",
                principalTable: "Tunes",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }
    }
}
